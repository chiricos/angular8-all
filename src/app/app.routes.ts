import { Routes} from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

export const APP_ROUTES:Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'lista-productos', component: ListaProductosComponent},
  {path: 'detalle-producto/:id-producto', component: DetalleProductoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];