import { Component, effect, ElementRef, viewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTF, CSS2DRenderer, GLTFLoader, OrbitControls } from 'three-stdlib';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise34',
  imports: [CommonModule, FormsModule],
  templateUrl: './exercise34.component.html',
  styleUrl: './exercise34.component.scss'
})
export class Exercise34Component {
  length: number = 0;
  width: number = 0;
  height: number = 0;


}


