import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-spiral-svg',
  templateUrl: './spiral-svg.component.html',
  styleUrls: ['./spiral-svg.component.scss'],
})
export class SpiralSvgComponent implements AfterViewInit {
  @ViewChild('svg') svg!: ElementRef<SVGElement>;

  createOn(root: SVGElement, name: string, attrs: any) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', name);
    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) el.setAttribute(attr, attrs[attr]);
    }
    return root.appendChild(el);
  }

  //https://codepen.io/cyanos/pen/XbXxOQ
  ngAfterViewInit(): void {
    this.createOn(this.svg.nativeElement, 'path', {
      fill: 'none',
      class: 'face',
      transform: 'translate(-396,-230)',
      d: 'M487.41,282.411c-15.07,36.137-50.735,61.537-92.333,61.537 \
            c-41.421,0-76.961-25.185-92.142-61.076',
    });
    this.createOn(this.svg.nativeElement, 'circle', {
      cx: -60,
      cy: -50,
      r: 10,
      fill: 'yellow',
    });
    this.createOn(this.svg.nativeElement, 'circle', {
      cx: 60,
      cy: -50,
      r: 10,
      fill: 'yellow',
    });
  }
}
