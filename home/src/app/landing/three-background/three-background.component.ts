import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-three-background',
  templateUrl: './three-background.component.html',
  styleUrls: ['./three-background.component.scss']
})
export class ThreeBackgroundComponent implements AfterViewInit {
  @ViewChild('backgroundVideo')
  videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.videoElement.nativeElement;
    video.play().catch(error => {
      // console.warn('Autoplay bloqueado. Tentando silenciar e reproduzir via script.');
      if (video.muted === false) {
        video.muted = true;
      }
      video.play().catch(err => {
        //  console.error('Falha crítica ao reproduzir vídeo de fundo:', err);
      });
    });
  }
}
