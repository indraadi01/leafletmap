import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() { }

  ionViewDidEnter() {
    // Base map layers
    const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const satellite = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com/">ESRI World Imagery</a>'
    });

    const topoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenTopoMap contributors'
    });

    const darkMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
    });

    const streetMap = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    });

    // Inisialisasi peta dengan OpenStreetMap sebagai default
    this.map = L.map('mapId', {
      center: [-7.7956, 110.3695],
      zoom: 13,
      layers: [openStreetMap]
    });

    // Basemap options
    const baseMaps = {
      'OpenStreetMap': openStreetMap,
      'Satellite': satellite,
      'Topo Map': topoMap,
      'Dark Map': darkMap,
      'Street Map': streetMap
    };

    // Tambahkan kontrol layer ke peta
    L.control.layers(baseMaps).addTo(this.map);

    // Menambahkan marker di UGM Yogyakarta
    const marker = L.marker([-7.770717, 110.377239]).addTo(this.map);

    // Menambahkan pop-up yang akan muncul ketika marker diklik
    marker.bindPopup('<b>UGM Yogyakarta</b><br>Universitas Gadjah Mada.').openPopup();
    // Menambahkan marker di Museum Sonobudoyo Yogyakarta
    const sonobudoyoMarker = L.marker([-7.801850, 110.364917]).addTo(this.map);
    sonobudoyoMarker.bindPopup('<b>Museum Sonobudoyo</b><br>Museum budaya di Yogyakarta.').openPopup();
  }
}
