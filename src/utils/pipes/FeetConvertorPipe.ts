import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: 'convertFeet'
})
export class FeetConvertorPipe implements PipeTransform {
    transform(value: number, unit?: 'meters'): string {
        switch (unit) {
            case 'meters': return (value / 3.281).toFixed(2) + ' m';
            default: return value + ' ft';
        }
    }
}