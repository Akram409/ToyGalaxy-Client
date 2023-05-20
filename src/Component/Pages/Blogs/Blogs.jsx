import img from "/public/profile.png";
const Blogs = () => {
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold text-center text-[#142850] ">
        Blogs Conversation
      </h1>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div className="chat-header">
          Programing Hero
          <time className="text-xs opacity-50 ml-1">12:45</time>
        </div>
        <div className="chat-bubble font-bold bg-[#4a3da7] text-white">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div className="chat-header font-bold">
          Akram Hossain
          <time className="text-xs opacity-50 ml-1">12:46</time>
        </div>
        <div className="chat-bubble font-bold bg-[#4a3da7] text-white">
          <span className="text-lg">Access Token and Refresh Token:</span>
          <br />
          1.Access tokens and refresh tokens are used in authentication and
          authorization systems. <br />
          2.After a user successfully authenticates, an access token is issued.{" "}
          <br />
          3.The access token contains information about the user's identity and
          permissions. <br />
          3.Access tokens have a short lifespan and are used to access protected
          resources. <br />
          4.When an access token expires, a refresh token can be used to obtain
          a new access token. <br />
          5.Refresh tokens have a longer lifespan and are used to maintain a
          user's session without requiring reauthentication.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div className="chat-header font-bold">
          Akram Hossain
          <time className="text-xs opacity-50 ml-1">12:48</time>
        </div>
        <div className="chat-bubble font-bold bg-[#4a3da7] text-white">
          <span className="text-lg">Storage on Client-side:</span> <br />
          1.Access tokens and refresh tokens should be stored securely on the
          client-side. <br />
          2.For access tokens, it is recommended to store them in an HTTP-only
          cookie.
          <br />
          3.HTTP-only cookies cannot be accessed by JavaScript, providing
          protection against cross-site scripting (XSS) attacks.
          <br />
          4.For refresh tokens, it is also preferable to store them in an
          HTTP-only cookie.
          <br />
          5.Storing tokens in cookies ensures they are automatically sent with
          each request to the server.
          <br />
          6.If storing tokens in cookies is not feasible, an alternative is to
          use browser storage mechanisms like local storage or session storage.
          <br />
          7.However, extra care should be taken to protect tokens stored in
          browser storage from XSS attacks by implementing appropriate security
          measures.
        </div>
      </div>
      <br />

      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div className="chat-header">
          Programing Hero
          <time className="text-xs opacity-50 ml-1">12:50</time>
        </div>
        <div className="chat-bubble font-bold bg-[#4a3da7] text-white">
          Compare SQL and NoSQL databases?
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div className="chat-header font-bold">
          Akram Hossain
          <time className="text-xs opacity-50 ml-1">12:52</time>
        </div>
        <div className="chat-bubble font-bold bg-[#4a3da7] text-white">
          <span className="text-lg">SQL Databases:</span>
          <br />
          1.Structured data.
          <br />
          2.Tabular format. <br />
          3.Well-defined schema. <br />
          4.ACID transactions. <br />
          4.SQL queries. <br />
          <br />
          <span className="text-lg">NoSQL Databases:</span>
          <br />
          1.Unstructured/Semi-structured data
          <br />
          2.Flexible schema
          <br />
          3.No predefined structure
          <br />
          4.No ACID transactions
          <br />
          5.NoSQL queries (document-based, key-value, graph, etc.)
        </div>
      </div>
      <br />

      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div className="chat-header">
          Programing Hero
          <time className="text-xs opacity-50 ml-1">12:54</time>
        </div>
        <div className="chat-bubble font-bold bg-[#4a3da7] text-white">
          What is express js? What is Nest JS ?
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div className="chat-header font-bold">
          Akram Hossain
          <time className="text-xs opacity-50 ml-1">12:58</time>
        </div>
        <div className="chat-bubble font-bold bg-[#4a3da7] text-white">
          <span className="text-lg">Express.js:</span>
          <br />
          * Express.js is a web application framework for Node.js that
          simplifies the development of web applications and APIs by providing a
          minimalist and flexible structure.
          <br />
          <br />
          <span className="text-lg">Nest.js:</span>
          <br />* Nest.js is a TypeScript-based web application framework for
          Node.js that focuses on scalability and maintainability by combining
          elements from different frameworks and design patterns. It provides a
          structured and extensible architecture for building server-side
          applications.
        </div>
      </div>
      <br />

      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div className="chat-header">
          Programing Hero
          <time className="text-xs opacity-50 ml-1">1:00</time>
        </div>
        <div className="chat-bubble font-bold bg-[#4a3da7] text-white">
          What is MongoDB aggregate and how does it work?
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div className="chat-header font-bold">
          Akram Hossain
          <time className="text-xs opacity-50 ml-1">1:02</time>
        </div>
        <div className="chat-bubble font-bold bg-[#4a3da7] text-white">
          <span className="text-lg">MongoDB's aggregate:</span>
          <br />
          * MongoDB's aggregate is a data processing operation that allows you to perform advanced
          queries, transformations, and aggregations on data within MongoDB
          collections.
          <br />
          <br />
          <span className="text-lg">How it works:</span>
          <br />
          1.The aggregate operation takes an array of stages as input, where
          each stage represents a specific operation. <br />
          2.These stages are executed in order, with the output of one stage
          serving as the input to the next stage in the pipeline. <br />
          3.Each stage can perform various operations, such as filtering,
          grouping, sorting, projecting, and applying calculations. <br />
          4.As the data flows through the stages, you can manipulate and shape
          it to perform complex data transformations and derive meaningful
          insights. <br />
          5.The aggregate operation is efficient for processing and analyzing
          large amounts of data directly within the MongoDB database, without
          the need for external tools or processes.
        </div>
      </div>
      <br />
    </div>
  );
};

export default Blogs;
