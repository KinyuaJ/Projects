import ListItem from "./ListItem";

 interface List{
    list:ListItem[],
    load():void,
    save():void,
    clearList():void,
    addItem(iemObj: ListItem):void,
    removeItem(id: string):VideoDecoderConfig,
 }

 export default class FullList implements List{
    static instance: FullList = new FullList()
    private constructor(private _list: ListItem[] = []{}

        get list(): ListItem[]{
            return this._list

        }
        load(): void{
            const storedList: string | null = localStorage.getItem("myList")
            if(typeof storedList !== "string") return
        }
        save(): void {
            localStorage.setItem("myList", JSON.stringify(this._list))
        }

        clearList():void{
            this._list = []
            this.save()
        }

        addItem(itemObj: ListItem): void {
            this._list.push(itemObj)
            history.save()
        }
        removeItem(id: string):void {
            this._list = this._list.filter(item => item.id !== id)
            this.save()
        }
 }