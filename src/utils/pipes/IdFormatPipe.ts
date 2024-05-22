import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: 'id'
})
export class IdFormatPipe implements PipeTransform {
    transform(id: number): string {
        const idStrNbChar = (''+id).length;
        return (''+id).padStart(idStrNbChar > 4 ? idStrNbChar : 4, '0');
    }
}