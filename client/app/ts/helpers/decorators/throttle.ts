export function throttle(miliseconds: number) {

    return function(target: any, key: string, descriptor: PropertyDescriptor) {

        const method = descriptor.value;
        let timer = 0;

        descriptor.value = function(...args: any[]) {
            if (event) event.preventDefault();
            clearTimeout(timer);
            timer = setTimeout(() => method.apply(this, args), miliseconds);

        }

        return descriptor;

    }

}