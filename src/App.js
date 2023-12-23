import "./App.css";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import Button from "@mui/material/Button";
import Displaycard from "./Displaycard";
import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({ tickets: [], users: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleChange = (event) => {
    switch (event.target.value) {
      default:
        setData({
          tickets: [
            {
              id: "CAM-1",
              title: "Update User Profile Page UI",
              tag: ["Feature request"],
              userId: "usr-1",
              status: "Todo",
              priority: 4,
            },
          ],
          users: [],
        });
        break;
      case "status":
        setData({
          tickets: [
            {
              id: "CAM-1",
              title: "skdjboshfoih oisdhgoiahglksag",
              tag: ["Feature request"],
              userId: "usr-1",
              status: "Todo",
              priority: 4,
            },
          ],
          users: [],
        });
        break;
      case "user":
        setData({
          tickets: [
            {
              id: "CAM-1",
              title: "lshf oishgohgpshfgk",
              tag: ["Feature request"],
              userId: "usr-1",
              status: "Todo",
              priority: 4,
            },
          ],
          users: [],
        });
      // case "priority":
      //   setData()
    }
  };

  useEffect(() => {
    console.log("useEffect: Component is mounted");
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (isMounted) {
          console.log("fetchData: Setting data in state");
          console.log(result);
          setData(result);
        }
      } catch (error) {
        if (isMounted) {
          console.error("fetchData: Error fetching data", error);
          setError(error);
        }
      } finally {
        if (isMounted) {
          console.log("fetchData: Fetch complete");
          setLoading(false);
        }
      }
    };

    if (isMounted) {
      fetchData();
    }

    return () => {
      isMounted = false;
      console.log("useEffect: Component is unmounted");
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <div className="navigation">
        <nav>
          <div class="display-switch-wrapper">
            <div>
              <button onClick={() => setIsOpen(!isOpen)}>
                Display Dropdown
              </button>
              {isOpen && (
                <div>
                  <section>
                    <div>
                      <span>Grouping</span>
                      <select
                        name="grouping"
                        id="grouping"
                        onChange={handleChange}
                      >
                        <option value="status">status</option>
                        <option value="user">user</option>
                        <option value="priority">priority</option>
                      </select>
                    </div>
                    <div>
                      <span>Ordering</span>
                      <select name="ordering" id="ordering">
                        <option value="priority">priority</option>
                        <option value="title">Title</option>
                      </select>
                    </div>
                  </section>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* <div className="darkmode">
          <DarkModeIcon />
        </div> */}

        {/* For dark mode  */}
        <div className="dark-mode">
          <DarkModeToggle />
        </div>
      </div>

      <div className="dashboard">
        <div className="card-container">
          <div className="inner-container">
            <div class="word-with-plus">
              <span class="word">Column1</span>
              <span class="plus-sign">+</span>
              <div class="dot">...</div>
            </div>
            <div class="box1">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <Displaycard data={data} isDarkMode={isDarkMode} />
              )}
            </div>
            <div class="box2">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <Displaycard data={data} />
              )}
            </div>
            <div class="box3">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <Displaycard data={data} />
              )}
            </div>
          </div>
          <div className="inner-container">
            <div class="word-with-plus">
              <span class="word">Column2</span>
              <span class="plus-sign">+</span>
              <div class="dot">...</div>
            </div>
            <div class="box1">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <Displaycard data={data} />
              )}
            </div>
          </div>
          <div className="inner-container">
            <div class="word-with-plus">
              <span class="word">Column3</span>
              <span class="plus-sign">+</span>
              <div class="dot">...</div>
            </div>
            <div class="box1">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <Displaycard data={data} />
              )}
            </div>
            <div class="box2">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <Displaycard data={data} />
              )}
            </div>
          </div>

          <div className="inner-container">
            <div class="word-with-plus">
              <span class="word">Column4</span>
              <span class="plus-sign">+</span>
              <div class="dot">...</div>
            </div>
            <div class="box1">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <Displaycard data={data} />
              )}
            </div>
            <div class="box2">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <Displaycard data={data} />
              )}
            </div>
            <div class="box3">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <Displaycard data={data} />
              )}
            </div>
          </div>
          <div className="inner-container">
            <div class="word-with-plus">
              <span class="word">Column5</span>
              <span class="plus-sign">+</span>
              <div class="dot">...</div>
            </div>
            <div class="box1">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <Displaycard data={data} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
