export default function ItemRoot({ children, id }) {
  return (
    <div key={id} className="item">
      {children}
    </div>
  );
}
