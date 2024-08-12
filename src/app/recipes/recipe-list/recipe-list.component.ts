import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent,
    NgFor
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
 recipes: Recipe[]=[
   new Recipe("A test recipe", "A test description","https://th.bing.com/th/id/R.e094a999accce23f59e6198c645e41a8?rik=Hfr%2bEwG%2bzXrUdQ&riu=http%3a%2f%2fwww.greek-islands.us%2fgreek-recipes%2fyouvetsi%2fyouvetsi.jpg&ehk=J8UzXhJ%2bCLok7CpbNwewnUTTQgS0vxmZCUIJ2h2rn94%3d&risl=&pid=ImgRaw&r=0"),
   new Recipe("A test recipe", "A test description","https://th.bing.com/th/id/R.e094a999accce23f59e6198c645e41a8?rik=Hfr%2bEwG%2bzXrUdQ&riu=http%3a%2f%2fwww.greek-islands.us%2fgreek-recipes%2fyouvetsi%2fyouvetsi.jpg&ehk=J8UzXhJ%2bCLok7CpbNwewnUTTQgS0vxmZCUIJ2h2rn94%3d&risl=&pid=ImgRaw&r=0"),
   new Recipe("A test recipe", "A test description","https://th.bing.com/th/id/R.e094a999accce23f59e6198c645e41a8?rik=Hfr%2bEwG%2bzXrUdQ&riu=http%3a%2f%2fwww.greek-islands.us%2fgreek-recipes%2fyouvetsi%2fyouvetsi.jpg&ehk=J8UzXhJ%2bCLok7CpbNwewnUTTQgS0vxmZCUIJ2h2rn94%3d&risl=&pid=ImgRaw&r=0")
 ];
}
