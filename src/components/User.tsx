export function User(props: any) {
  return (
    <div className="flex justify-between">
      <span>{props.name}</span>
      <span>R$ {props.bid}</span>
    </div>
  )
}