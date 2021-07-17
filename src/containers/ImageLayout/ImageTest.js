import classes from "./ImageTest.module.css";
// https://flaviocopes.com/flexbox/
export default function ImageTest() {
  return (
    <div>
      <h1>I am the heading</h1>
      <div className={classes.wrapper}>
        <div className={classes.images}>
            <div><img src="https://picsum.photos/200/300" alt="ad" /></div>
            <div><img src="https://picsum.photos/200/300" alt="ad" /></div>
            <div><img src="https://picsum.photos/200/300" alt="ad" /></div>
            <div><img src="https://picsum.photos/200/300" alt="ad" /></div>
            <div><img src="https://picsum.photos/200/300" alt="ad" /></div>
        </div>
        <div className={classes.sidebar}>
          <div>I am sidebar</div>
          <div>I am sidebar</div>
          <div>I am sidebar</div>
          <div>I am sidebar</div>
          <div>I am sidebar</div>
        </div>
      </div>
    </div>
  );
}
