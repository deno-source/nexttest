async function asyncFn(){
    let data = await fetch('http://localhost:3002/api');
    return data.json()
}
export default async function Index(){
    let {data} = await asyncFn()
    return <div>page2服务端组件渲染的数据: {data}</div>
}