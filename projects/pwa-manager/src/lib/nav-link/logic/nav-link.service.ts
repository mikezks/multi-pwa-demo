import { Injectable } from '@angular/core';
import { NavLink } from '../model/nav-link';


@Injectable({
  providedIn: 'root'
})
export class NavLinkService {
  links: NavLink[] = [
    {
      label: 'App ONE',
      url: '/app-one'
    },
    {
      label: 'App TWO',
      url: '/app-two'
    }
  ]
}
