import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noutati',
  templateUrl: './noutati.component.html',
  styleUrls: ['./noutati.component.scss']
})
export class NoutatiComponent implements OnInit {


  newsList = [
    {
      id: 1,
      title: "Ne pregătim de un sezon plin de fructe naturale ...",
      article: "Odata cu venirea sezonului cald, perioada fructelor românești se apropie, iar noi ne pregătim de un sezon bogat cu fructe naturale."
    },
    {
      id: 2,
      title: "Alunele de pământ și la Târgu-Jiu..",
      article: "Iubitele alunele de pământ, cunoscute și sub denumirea de arahide, au ajuns si la Târgu-Jiu. După câteva luni de așteptare prima plantație a dat roade, ele fiind pregătite să ajungă și în casele voastre. Acestea au fost crescute într-un mod cât mai natural, fiind lăsate să se dezvolte doar datorită substanțelor din sol și a îngrășământului natural. Acestea costă 40RON/KG, ele fiind vândute în stare naturală pentru a fi cultivate. Pentru mai multe informații despre alunele de pământ, dar și despre modul lor de preparare, puteți găsi pe pagina special destinată lor, iar pentru alte curizotăți nu ezitați să ne contactați ."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
