export function User(props: any) {
  return (
    <div className="flex justify-between">
      <span>{props.name}</span>
      <span>{props.bid}</span>
    </div>
  )
}