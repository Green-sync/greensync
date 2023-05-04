export declare interface CalendarProps{
    days: CalendarDays[]
    events: CalendarEvents[]
}
declare interface CalendarEvents{
    
        id: Number,
        name: string,
        imageUrl: string
        start: string,
        startDatetime: string,
        end: string,
        endDatetime: string,
        
      
}

declare interface CalendarDays{
   
    date: string,
     isCurrentMonth?: boolean
     isToday?: boolean,
     isSelected?: boolean,

}