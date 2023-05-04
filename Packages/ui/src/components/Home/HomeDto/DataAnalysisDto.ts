export declare interface IDataDonut {
    labels: string[],
    datasets: IDatasets[]


}

export declare interface IDatasets {
    label: string,
    data: number [],
    backgroundColor: string [],
    borderColor: string[]
    borderWidth: number,
}

export declare interface ILabels{
    lables: string
}