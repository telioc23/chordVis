import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
} from '@angular/core';
import { MIDI_MESSAGES, notes, toData } from '@ng-web-apis/midi';
import { EMPTY, merge, Observable, Subject } from 'rxjs';
import {
  catchError,
  filter,
  map,
  scan,
  startWith,
  switchMap,
  take,
} from 'rxjs/operators';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;
import { Chord, Midi, Note } from '@tonaljs/tonal';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  readonly octaves = Array.from({ length: 24 }, (_, i) => i + 48);
  readonly notes$: Observable<Map<number, number | null>>;
  private readonly silent$ = new Subject<number>();

  currentNotes: string[] = [];
  currentChord: string = '----';

  constructor(@Inject(MIDI_MESSAGES) messages$: Observable<MIDIMessageEvent>) {
    this.notes$ = merge(
      messages$.pipe(
        catchError(() => EMPTY),
        notes(),
        toData()
      )
    ).pipe(
      scan((map, [_, note, volume]) => map.set(note, volume / 512), new Map()),
      switchMap((notes) =>
        this.silent$.pipe(
          map((key) => notes.set(key, null)),
          startWith(notes)
        )
      ),
      startWith(new Map())
    );

    this.notes$.subscribe((map) => {
      this.currentNotes = Array.from(
        new Map([...map].filter(([k, v]) => v != null && v > 0.0)).keys()
      ).map((n) => Midi.midiToNoteName(n));
      this.currentChord = Chord.detect(
        this.currentNotes.map((n) => Note.pitchClass(n))
      ).toString();
      console.log(this.currentNotes);
      console.log(this.currentChord);
    });
  }
}
