import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: 'ceil'
})
export class CeilIntegerPipe implements PipeTransform {
    transform(value: number): number {
        return Math.ceil(value);
    }
}