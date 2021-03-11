class Event {
    constructor(){
        this._listener = {}
    }
    
    on(type,handler){
        console.log(type)
        if(!this._listener[type]){
            this._listener[type] = []
        }
        this._listener[type].push(handler)

    }
    off(type,handler){
        if(!handler){
            this.listeners[type] = []
            return 
        }
        if(this._listener[type]){
            const listeners = this._listener[type]
            for(let i = 0,len = listeners.length;i<len;i++){
                if(listeners[i] === handler){
                    listeners.splice(i,1)
                }
            }
        }
    }
    emit(type,event){
        if(!event || event.type === null){
            return 
        }
        const listeners = this._listener[type]
        if(!listeners) return 
        for(let i = 0,len=listeners.length;i<len;i++){
            listeners[i](event)
        }
    }
}

class Rect extends Event{
    constructor(opts,canvas){
        super()
        this.opts = opts
        this.canvas = canvas
    }
    draw(){
        const ctx = this.canvas.ctx
        const {x,y,width,height,fillStyle} = this.opts
        ctx.fillStyle = fillStyle
        ctx.fillRect(x,y,width,height)
    }
    getEventPosition(clientX,clientY){
        const bbox = this.canvas.canvas.getBoundingClientRect()
        return {
            x:clientX - bbox.left,
            y:clientY - bbox.top
        }
    }
    isEventInRegion(clientX,clientY){
        const point = this.getEventPosition(clientX,clientY)
        const {x,y,width,height} = this.opts
        if(x < point.x && point.x < x+width && y < point.y && point.y < y+height){
            return true
        }
        return false
    }
}

const eventList = ['click','mousemove']

class Canvas extends Event{
    defaultOpts = {}
    constructor(c){
        super()
        this.canvas = c
        this.ctx = c.getContext('2d')
        this.children = []
        this.initEvent()
    }
    initEvent(){
        eventList.forEach(e =>{
            this.canvas.addEventListener(e,this.handleEvent)
        })
    }
    handleEvent = (e)=>{
        this.children.filter(shape=>shape.isEventInRegion(e.x,e.y))
        .forEach(shape=>shape.emit(e.type,e))
    }
    addChild(c){
        this.children.push(c)
    }
    draw(){
        this.children.forEach(shape=>shape.draw())
    }
    rect(conf){
        const rect = new Rect(conf,this)
        this.addChild(rect)
        return rect
    }
}
