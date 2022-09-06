import { Component, OnInit } from '@angular/core';

interface Menu {
  link: string;
  nombre: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  lista: Menu[] = [
    { link: "users", nombre: "Usuarios" },
    { link: "ciclos_escolares", nombre: "Ciclos escolares" },
    { link: "dictamenes", nombre: "Dictamenes" },
    { link: "modelos", nombre: "Modelos" },
    { link: "motivos", nombre: "Motivos"},
    { link: "municipios", nombre: "Municipios" },
    { link: "niveles_educativos", nombre: "Niveles educativos" },
    { link: "personal_p_funcion", nombre: "Funciones del personal" },
    { link: "sostenimientos", nombre: "Sostenimientos" },
    { link: "subsistemas", nombre: "Subsistemas" },
    { link: "subsubsistemas", nombre: "Subsubsistemas" },
    { link: "thrs", nombre: "Thrs" },
    { link: "tipo_bajas", nombre: "Tipo de bajas" },
    { link: "turno", nombre: "Turno" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
