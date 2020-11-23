import chunk from 'lodash/chunk'
import { startOfWeek, addDays, setDay,format, setMonth } from 'date-fns';


export function buildweeks(year, monthIndex){
    //返回n个月的m天是星期几
    const firstDayOfMonth = new Date(year, monthIndex);
    const firstDayOfCanlendar = startOfWeek(firstDayOfMonth, {weekStartOn :0 })
    // 一维数组
    const weeks = new Array(6*7)
    .fill(0)
    .map((_, i) => addDays(firstDayOfCanlendar, i));
    //调用chunk函数生成二维数组
    return chunk(weeks,7)
}



export function buildDayName(weekStartOn){
    return new Array(7).fill(0)
    .map((_,i)=>(i + weekStartOn)%7)
    .map(dayOfWeek => {
        const day = setDay(new Date(0), dayOfWeek);
        return format(day, "EEEEEE")
    })
}

export function buildMonths(){
    const months = new Array(12)
    .fill(0)
    .map((_, i)=>setMonth(new Date(0), i))
    .map((month, j)=> ({index:j, name:format(month, 'MMMM')}))

    return chunk(months, 3)
}


export function buildYears(middle, windowSize = 3){
    const start = middle - windowSize;
    const end = middle + windowSize;
    const years = []
    for( let i = start; i <= end; i ++){
        years.push(i)
    }
    return years;
}