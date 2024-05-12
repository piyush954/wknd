export const Container = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      {props.children}
    </div>
  );
};

export const ContainerLast = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-end">
{props.children}
    </div> );
};