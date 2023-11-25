export default function BorderButton() {
  const onClick = () => {
    console.log('Hey~! 모두들 안녕 내가 누군지아니~?');
  };
  return (
    <div>
      <button style={{ backgroundColor: 'yellow' }} onClick={onClick}>
        클릭
      </button>
    </div>
  );
}
