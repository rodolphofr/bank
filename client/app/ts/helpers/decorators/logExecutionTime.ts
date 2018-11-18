export function logExecutionTime(inSeconds: boolean) {

    return function(target: any, key: string, descriptor: PropertyDescriptor) {

        const method = descriptor.value;
        let divisor = 1;
        let unit = 'miliseconds';

        if (inSeconds) {
            divisor = 1000;
            unit = 'seconds';
        }

        descriptor.value = function(...args: any[]) {

            console.log('--------------------------------');

            const initialTime = performance.now();
            const result = method.apply(this, args);
            const endTime = performance.now();

            console.log(`Method ${key} took ${ (endTime - initialTime) / divisor } ${ unit } to execute.`);

            return result;

        }

        return descriptor;

    }

}