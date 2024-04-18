const getData = async () => {
    const res = await fetch("https://api.jsonsilo.com/public/d1166487-7a88-4c53-9be7-94d20dbd04d4");

    if (!res.ok) {
        throw new Error("something went wrong");
    }

    return res.json();
};

const blog = async () => {
    const posts = await getData();


return (


    <div>
        <h1>Data from JSON:</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.name}</li>
          ))}
        </ul>
      </div>
)
};

export default blog;
