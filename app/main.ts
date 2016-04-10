import {bootstrap}    from 'angular2/platform/browser'
import {NewPostComponent} from './new-post.component'
import {HTTP_PROVIDERS} from 'angular2/http'

bootstrap(NewPostComponent, [HTTP_PROVIDERS]);
