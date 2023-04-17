import {
  Component,
  VERSION,
  ViewChild,
  OnInit,
  ElementRef,
} from '@angular/core';
import { fromEvent, Subscription, timer } from 'rxjs';

export class Ball {
  x: number = 100;
  y: number = 100;
  vx: number = 17;
  vy: number = 15;
  radius: number = 25;
  color: string = 'blue';
  ctx: CanvasRenderingContext2D;
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  constructor(ctx: any) {
    this.ctx = ctx;
  }
}

@Component({
  selector: 'app-spiral',
  templateUrl: './spiral.component.html',
  styleUrls: ['./spiral.component.scss'],
})
export class SpiralComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  subcription: Subscription = new Subscription();
  @ViewChild('myCanvas', { static: true }) myCanvas!: ElementRef;
  ngOnInit() {
    this.draw1();
  }
  draw1() {
    this.subcription && this.subcription.unsubscribe();
    const canvas = this.myCanvas.nativeElement as HTMLCanvasElement;
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      if (ctx != null) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.fillRect(10, 10, 55, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 55, 50);

        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
      }
    }
  }

  draw2() {
    this.subcription && this.subcription.unsubscribe();
    const canvas = this.myCanvas.nativeElement as HTMLCanvasElement;
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      if (ctx != null) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
        ctx.stroke();
      }
    }
  }

  draw3() {
    this.subcription && this.subcription.unsubscribe();
    const canvas = this.myCanvas.nativeElement as HTMLCanvasElement;
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      if (ctx != null) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Ejemplo de curvas cúbicas
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();
      }
    }
  }

  draw4() {
    this.subcription && this.subcription.unsubscribe();
    const canvas = this.myCanvas.nativeElement as HTMLCanvasElement;
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      const ball = new Ball(ctx);
      if (ctx != null) {
        this.subcription = timer(0, 100).subscribe((_) => {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ball.draw();
          ball.x += ball.vx;
          ball.y += ball.vy;

          if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
            ball.vy = -ball.vy;
          }
          if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
            ball.vx = -ball.vx;
          }
        });
      }
    }
  }
}
