import { Component, OnInit, Input } from '@angular/core';
import  galerieHan  from '../../../assets/Data-json/Galerie-Han.json';

@Component({
  selector: 'app-turism-descriere-vanator',
  templateUrl: './turism-descriere-vanator.component.html',
  styleUrls: ['./turism-descriere-vanator.component.scss']
})
export class TurismDescriereVanatorComponent implements OnInit {

  linkFacebookHan = "https://www.facebook.com/hanulvanatoruluigorj/";
  linkBookingHan = "https://www.booking.com/hotel/ro/casa-vanatorului-comuna-pestisani.ro.html?aid=304142;label=gen173nr-1FCAMowAFCCXBlc3Rpc2FuaUggWARowAGIAQGYASC4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AurCrI4GwAIB0gIkZWY4NTFjZTgtZTBlMS00ODhiLTgwNjEtMmQ5NWRiYjMxYTk32AIF4AIB;sid=0b0fa2b531b84774c89abd138acb0c13;atlas_src=sr_iw_btn;dest_id=-1166429;dest_type=city;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&";

  @Input() public GalerieHan: { image: string, thumbImage: string}[] = galerieHan;

  constructor() { }

  ngOnInit(): void {
  }

  // pozeHan = [
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/01.jpg",
  //     imageTitle: "Poza 1",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/02.jpg",
  //     imageTitle: "Poza 2",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/03.jpg",
  //     imageTitle: "Poza 3",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/04.jpg",
  //     imageTitle: "Poza 4",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/05.jpg",
  //     imageTitle: "Poza 5",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/06.jpg",
  //     imageTitle: "Poza 6",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/07.jpg",
  //     imageTitle: "Poza 7",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/08.jpg",
  //     imageTitle: "Poza 8",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/09.jpg",
  //     imageTitle: "Poza 9",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/10.jpg",
  //     imageTitle: "Poza 10",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/11.jpg",
  //     imageTitle: "Poza 11",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/12.jpg",
  //     imageTitle: "Poza 12",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/13.jpg",
  //     imageTitle: "Poza 13",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/14.jpg",
  //     imageTitle: "Poza 14",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/15.jpg",
  //     imageTitle: "Poza 15",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/16.jpg",
  //     imageTitle: "Poza 16",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/17.jpg",
  //     imageTitle: "Poza 17",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/18.jpg",
  //     imageTitle: "Poza 18",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/19.jpg",
  //     imageTitle: "Poza 19",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/20.jpg",
  //     imageTitle: "Poza 20",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/21.jpg",
  //     imageTitle: "Poza 21",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/22.jpg",
  //     imageTitle: "Poza 22",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/23.jpg",
  //     imageTitle: "Poza 23",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/24.jpg",
  //     imageTitle: "Poza 24",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/25.jpg",
  //     imageTitle: "Poza 25",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/26.jpg",
  //     imageTitle: "Poza 26",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/27.jpg",
  //     imageTitle: "Poza 27",
  //     imageDescription: "Lorem bla bla bla"
  //   },
  //   {
  //     imageUrl: "assets/images/Turism/Hanul Vanatorului/28.jpg",
  //     imageTitle: "Poza 28",
  //     imageDescription: "Lorem bla bla bla"
  //   },

  // ]

}
