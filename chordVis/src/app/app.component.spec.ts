import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Chord } from '@tonaljs/tonal';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'chordVis'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('chordVis');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('chordVis app is running!');
  });

  it("test1", ()=> {
    const a = Chord.detect(['D', 'F#', 'A', 'C']); // => ["D7"]
    const b = Chord.detect(['F#', 'A', 'C', 'D']); // => ["D7/F#"]
    const c = Chord.detect(['A', 'C', 'D', 'F#']); // => ["D7/A"]
    const d = Chord.detect(['E', 'G#', 'B', 'C#']); // => ["E6", "C#m7/E"]
  }) 
});
