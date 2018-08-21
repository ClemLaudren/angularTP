import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTP';
  articles = [
    {
      title: "J'apprécie les fruits au sirop",
      content: "En garde ma grosse tata",
      comments: [
        {
          username: "John Wick",
          description: "C'est la guerre !"
        }
      ]
    },
    {
      title: "Pas changer assiette pour fromage",
      content: "Faut mettre du beurre au fond du plat pour pas que le gratin colle",
      comments: []
    }
  ];
}
