# How does webpack handle imported images in React applications, and what happens when you directly specify the image path in the HTML file?

## When you import an image using `import logo from './logo.png';`, webpack, which is a tool that manages your code, takes care of processing it. It includes the image in the final JavaScript bundle it creates. So, when you use that imported `logo` variable in your JSX like `<img src={logo} alt="Logo" />`, it's like telling webpack, "Hey, please make sure this image is included in my code."

## On the flip side, if you directly specify the path in the `src` attribute of the `img` tag like `<img src="./logo.png" alt="Logo" />`, webpack doesn't play a role. Instead, the browser tries to find and load the image directly from that path. If the path is incorrect or the image isn't available there, the browser won't be able to display it.

## So, by using import statements for images, you ensure that webpack handles them properly, including them in your final bundle. This guarantees that the images are available when your code runs in the browser.

# Inline style of writing CSS in JSX

## Create a Javascript Object

### const ComponentWithInlineStyle = () => {
  // Define a JavaScript object to hold the styles (Only Object without Component will also work)
  const styles = {
    backgroundColor: 'lightblue',
    color: 'darkblue',
    padding: '20px',
    borderRadius: '5px',
  };

  // JSX element with inline styles applied
  return (
    <div style={styles}>
      <p>This is a component with inline styles!</p>
    </div>
  );
};
