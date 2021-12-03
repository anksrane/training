import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'mw-media-item',
    templateUrl: './media-item.component.html',
    styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
    name = 'by Interpolation';
    name2 = 'Binding';
    /* To Display Data from Object */
    @Input() mediaItem;
    @Output() delete = new EventEmitter();
    wasWatched() {
        return true;
    }
    onDelete() {
        console.log("Delete is Clicked");
        this.delete.emit(this.mediaItem);
    }
}
