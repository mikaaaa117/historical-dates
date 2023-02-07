import "./CircleMenu.scss";

export const CircleMenu = () => {
  return (
    <div className="circle-menu">
      <span className="dates">
        <span className="dates__first">2018</span>
        <span className="dates__second">2023</span>
      </span>
      <div className="circle">
        <li style={{ "--i": 1 } as React.CSSProperties}>
          <span>
            <p>1</p>
          </span>
        </li>
        <li style={{ "--i": 2 } as React.CSSProperties}>
          <span>
            <p>2</p>
          </span>
        </li>
        <li style={{ "--i": 3 } as React.CSSProperties}>
          <span>
            <p>3</p>
          </span>
        </li>
        <li style={{ "--i": 4 } as React.CSSProperties}>
          <span>
            <p>4</p>
          </span>
        </li>
        <li style={{ "--i": 5 } as React.CSSProperties}>
          <span>
            <p>5</p>
          </span>
        </li>
        <li style={{ "--i": 6 } as React.CSSProperties}>
          <span>
            <p>6</p>
          </span>
        </li>
      </div>
    </div>
  );
};
