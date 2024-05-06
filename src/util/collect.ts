export function collect<T extends object>(data: T[], field: keyof T & string): string[] {
    const collected = new Set<string>();
    for (const item of data) {
        if (!(field in item)) {
            continue;
        }

        (item[field] as any[]).forEach((item: any) => collected.add(item))
    }
    return Array.from(collected);
}