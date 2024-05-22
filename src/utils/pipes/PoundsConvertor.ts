import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: 'convertPounds'
})
export class PoundsConvertorPipe implements PipeTransform {
    transform(value: number, unit?: 'kg'): string {
        switch (unit) {
            case 'kg': return (value / 2.205).toFixed(2) + ' kg';
            default: return value + ' lbs';
        }
    }
}