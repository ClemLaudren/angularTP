import { PipeTransform, Pipe } from '@angular/core';
import truncate from 'lodash/truncate';

@Pipe({ name: 'truncatepipe' })
export class TruncatePipe implements PipeTransform {
    transform(value: string): string {
        return truncate(value, {'length': 30});
    }
}