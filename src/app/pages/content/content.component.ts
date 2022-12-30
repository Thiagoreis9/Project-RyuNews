import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  corFundo:string = '#fff'

  photoCover:string = ''

  photoBg:string = '';

  contentTitle:string = ''

  contentDescription:string = ''

  shortInfo:string | undefined = ""

  private id:string | null = ''

  autor:string = 'Thiago Reis'

  autorPhoto:string = 'https://media.licdn.com/dms/image/C4D03AQFq3U3YnRAlCA/profile-displayphoto-shrink_800_800/0/1660572251296?e=1677715200&v=beta&t=ld4i90xZFIHs-PbLxqxoWqQ9-GXpgHGrH1UtBdLaO0o'

  date = new Date().toDateString();

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]


    this.photoCover = result.photo
    this.photoBg = 'url(" '+ this.photoCover + ' ")';
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.shortInfo = result.shortInfo

  }

}
