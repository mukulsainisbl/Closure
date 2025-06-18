function OuterFunction(){
    let message = "Hello Im Outer Function"

    function InnerFunction(){
        console.log(message)
    }
    return InnerFunction
}

const closure = OuterFunction()

closure()