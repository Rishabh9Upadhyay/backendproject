require("dotenv").config();
const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 8000;
const path = require("path");
const mysql = require("./db/conn").con;
const session = require("express-session");


const templates_path = path.join(__dirname, "../templates/views");
const static_path = path.join(__dirname, "../public");
const partial_path = path.join(__dirname, "../templates/partials");




// Set up session middleware
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
}));




app.set("view engine", "hbs");
hbs.registerPartials(partial_path);
app.set("views", templates_path)
app.use(express.static(static_path))

app.get('/', (req, res) => {
    if (req.session.userDetails) {
        res.render("index", {
            Name1: req.session.userDetails
        })
    }
    else {
        res.render("index")
    }
})








app.get('/login', (req, res) => {
    res.render("login");
})

app.get('/register', (req, res) => {
    res.render("register");
})


app.get('/loginnow', (req, res) => {
    const { email, password } = req.query;
    const qry = "select * from customers where email=? and password=?";
    mysql.query(qry, [email, password], (err, results) => {
        if (err) throw err;
        else {
            if (results.length > 0) {
                const { username, email } = results[0];
                req.session.userDetails = username;
                req.session.userEmail = email;
                res.render("index", {
                    Name1: username
                })
            }
            else{
                res.render("login",{mgsl: true})
            }
        }
    })
})









app.get('/item1', (req, res) => {
    let qry = "select username, feedback from feedback";
    mysql.query(qry, (err, results) => {
        if (err) throw err;
        else {
            if (results.length > 0) {
                if (req.session.userDetails) {
                    res.render("item1", { data1: results, Name1: req.session.userDetails });
                }
                else {
                    res.render("item1", { data1: results });
                }
            }
            else {
                if (req.session.userDetails) {
                    res.render("item1", { Name1: req.session.userDetails });
                }
                else {
                    res.render("item1");
                }
            }
        }
    })
})
app.get('/item2', (req, res) => {
    let qry = "select username, feedback from feedback";
    mysql.query(qry, (err, results) => {
        if (err) throw err;
        else {
            if (results.length > 0) {
                if (req.session.userDetails) {
                    res.render("item2", { data1: results, Name1: req.session.userDetails });
                }
                else {
                    res.render("item12", { data1: results });
                }
            }
            else {
                if (req.session.userDetails) {
                    res.render("item2", { Name1: req.session.userDetails });
                }
                else {
                    res.render("item2");
                }
            }
        }
    })
})
app.get('/item3', (req, res) => {
    let qry = "select username, feedback from feedback";
    mysql.query(qry, (err, results) => {
        if (err) throw err;
        else {
            if (results.length > 0) {
                if (req.session.userDetails) {
                    res.render("item3", { data1: results, Name1: req.session.userDetails });
                }
                else {
                    res.render("item3", { data1: results });
                }
            }
            else {
                if (req.session.userDetails) {
                    res.render("item3", { Name1: req.session.userDetails });
                }
                else {
                    res.render("item3");
                }
            }
        }
    })
})
app.get('/item4', (req, res) => {
    let qry = "select username, feedback from feedback";
    mysql.query(qry, (err, results) => {
        if (err) throw err;
        else {
            if (results.length > 0) {
                if (req.session.userDetails) {
                    res.render("item4", { data1: results, Name1: req.session.userDetails });
                }
                else {
                    res.render("item4", { data1: results });
                }
            }
            else {
                if (req.session.userDetails) {
                    res.render("item4", { Name1: req.session.userDetails });
                }
                else {
                    res.render("item4");
                }
            }
        }
    })
})
app.get('/item5', (req, res) => {
    let qry = "select username, feedback from feedback";
    mysql.query(qry, (err, results) => {
        if (err) throw err;
        else {
            if (results.length > 0) {
                if (req.session.userDetails) {
                    res.render("item4", { data1: results, Name1: req.session.userDetails });
                }
                else {
                    res.render("item4", { data1: results });
                }
            }
            else {
                if (req.session.userDetails) {
                    res.render("item4", { Name1: req.session.userDetails });
                }
                else {
                    res.render("item4");
                }
            }
        }
    })
})
app.get('/item6', (req, res) => {
    let qry = "select username, feedback from feedback";
    mysql.query(qry, (err, results) => {
        if (err) throw err;
        else {
            if (results.length > 0) {
                if (req.session.userDetails) {
                    res.render("item6", { data1: results, Name1: req.session.userDetails });
                }
                else {
                    res.render("item6", { data1: results });
                }
            }
            else {
                if (req.session.userDetails) {
                    res.render("item6", { Name1: req.session.userDetails });
                }
                else {
                    res.render("item6");
                }
            }
        }
    })
})
app.get('/item7', (req, res) => {
    let qry = "select username, feedback from feedback";
    mysql.query(qry, (err, results) => {
        if (err) throw err;
        else {
            if (results.length > 0) {
                if (req.session.userDetails) {
                    res.render("item7", { data1: results, Name1: req.session.userDetails });
                }
                else {
                    res.render("item7", { data1: results });
                }
            }
            else {
                if (req.session.userDetails) {
                    res.render("item7", { Name1: req.session.userDetails });
                }
                else {
                    res.render("item7");
                }
            }
        }
    })
})
app.get('/item8', (req, res) => {
    let qry = "select username, feedback from feedback";
    mysql.query(qry, (err, results) => {
        if (err) throw err;
        else {
            if (results.length > 0) {
                if (req.session.userDetails) {
                    res.render("item8", { data1: results, Name1: req.session.userDetails });
                }
                else {
                    res.render("item8", { data1: results });
                }
            }
            else {
                if (req.session.userDetails) {
                    res.render("item8", { Name1: req.session.userDetails });
                }
                else {
                    res.render("item8");
                }
            }
        }
    })
})
app.get('/item9', (req, res) => {
    let qry = "select username, feedback from feedback";
    mysql.query(qry, (err, results) => {
        if (err) throw err;
        else {
            if (results.length > 0) {
                if (req.session.userDetails) {
                    res.render("item9", { data1: results, Name1: req.session.userDetails });
                }
                else {
                    res.render("item9", { data1: results });
                }
            }
            else {
                if (req.session.userDetails) {
                    res.render("item9", { Name1: req.session.userDetails });
                }
                else {
                    res.render("item9");
                }
            }
        }
    })
})




app.get('/order', (req, res) => {
    // res.render("orders");
    // let qry = "select username, feedback from feedback";
    let qry = "select username, items, location from orders";
    mysql.query(qry, (err, results) => {
        if (err) throw err;
        else {
            if (results.length > 0) {
                if (req.session.userDetails) {
                    res.render("orders", { data1: results, Name1: req.session.userDetails });
                }
                else {
                    res.render("index", { msglo: true });
                }
            }
            else {
                if (req.session.userDetails) {
                    res.render("orders", { Name1: req.session.userDetails });
                }
                else {
                    res.render("index", { msglo: true });
                }
            }
        }
    })
})



app.get('/feedback', (req, res) => {
    if (req.session.userDetails) {
        res.render("feedback", { Name1: req.session.userDetails });
    } else {
        res.render("index", { msglo: true });
    }
})

app.get('/customers', (req, res) => {
    // res.render("customers")

    let qry = "select * from customers";
    mysql.query(qry, (err, results) => {
        if (err) throw err;
        else {
            if (req.session.userDetails) {
                res.render("customers", { data: results, Name1: req.session.userDetails });
            }
            else {
                res.render("index", { msglo: true });
            }
        }
    })

})







app.get('/addfeedback', (req, res) => {
    const { email, feedback } = req.query;

    const qry = "SELECT username, phone FROM customers WHERE email=?";
    mysql.query(qry, [email], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        } else {
            if (results.length > 0) {
                const { username, phone } = results[0]; // Extract 'username' and 'phone'
                const qry2 = "INSERT INTO feedback (username, phone, email, feedback) VALUES (?, ?, ?, ?)";
                mysql.query(qry2, [username, phone, email, feedback], (err, result) => {
                    if (err) {
                        console.error(err);
                        res.status(500).send("Internal Server Error"); // Handle database error gracefully
                    } else {
                        if (result.affectedRows > 0) {
                            res.render("index", { msg1: true, data: result });
                        }
                    }
                });
            } else {
                res.render("feedback", { msg2: true });
            }
        }
    });
});



app.get('/ordernow', (req, res) => {
    if (req.session.userDetails) {
        const { email, plate, location, items, password } = req.query;

        const pwd = password;

        const qry = "SELECT username, phone, password FROM customers WHERE email = ?";

        mysql.query(qry, [email], (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send("Internal Server Error");
            } else {
                if (results.length > 0) {
                    const { username, phone, password: storedPassword } = results[0];

                    if (pwd !== storedPassword) {
                        res.render("index", { mesg11: true });
                    } else {
                        const qry4 = "INSERT INTO orders (email, plate, location, username, phone, items) VALUES (?, ?, ?, ?, ?, ?)";

                        mysql.query(qry4, [email, plate, location, username, phone, items], (err, result) => {
                            if (err) {
                                console.error(err);
                                res.status(500).send("Internal Server Error 55");
                            } else {
                                if (result.affectedRows > 0) {
                                    res.render("index", { msg12: true });
                                }
                            }
                        });
                    }
                } else {
                    res.render("register", { mesg14: true });
                }
            }
        });
    }else{
        res.render("index",{msglo: true});
    }
});








app.get("/registercustomer", (req, res) => {
    // res.send("You asre using get method")

    const { username, email, phone, age, password, cpassword } = req.query;
    let qry = "select * from customers where email=? or phone=?";
    mysql.query(qry, [email, phone], (err, result) => {
        if (err) throw err;
        else {
            if (password !== cpassword) {
                res.render("register", { mesg1: true });
            } else if (result.length > 0) {
                res.render("register", { mesg2: true })
            } else {
                let qry2 = "insert into customers values(?,?,?,?,?,?)";
                mysql.query(qry2, [username, email, phone, age, password, cpassword], (err, results) => {
                    if (results.affectedRows > 0) {
                        res.render("login", { mesg3: true });
                    }
                })
            }
        }
    })
})


app.get("/updatesearch", (req, res) => {
    const { phone, password } = req.query;
    let qry = "select * from customers where phone=? and password=?";
    mysql.query(qry, [phone, password], (err, results) => {
        if (err) throw err;
        else {
            if (results.length > 0) {
                res.render("update", { mesg1: true, masg2: false, data: results })
            } else {
                res.render("update", { mesg1: false, masg2: true })
            }
        }
    })
})



app.get('/updatecustomers', (req, res) => {
    // fetch data
    const { username, age, phone, password, cpassword } = req.query;
    let qry = "update customers set username=?, age=?, password=?, cpassword=? where phone=?";
    mysql.query(qry, [username, age, password, cpassword, phone], (err, results) => {
        if (err) throw err;
        else {
            if (results.affectedRows > 0) {
                res.render("update", { umesg: true })
            }
        }
    })
})



app.get('/update', (req, res) => {
    if (req.session.userDetails) {
        res.render("update", {
            Name1: req.session.userDetails
        })
    } else {
        res.render("index", { msglo: true });
    }
})

app.get('/delete', (req, res) => {
    if (req.session.userDetails) {
        res.render("deleteac", { Name1: req.session.userDetails })
    }
    else {
        res.render("index", { msglo: true });
    }
})




app.get('/rcustomers', (req, res) => {
    // fetch data
    const { phone, password } = req.query;
    let qry = "delete from customers where phone=? and password=?";
    mysql.query(qry, [phone, password], (err, results) => {
        if (err) throw err;
        else {
            if (results.affectedRows > 0) {
                res.render("deleteac", { mesg1: true, masg2: false })
            } else {
                res.render("deleteac", { mesg1: false, masg2: true })

            }
        }
    })
})


app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
        } else {
            res.render("index");
        }
    });
});

app.get("/admin", (req, res) => {
    if (req.session.userDetails) {
        if (req.session.userEmail === "ru33653@gmail.com") {
            res.render("admin", { Name1: req.session.userDetails });
        }
        else {
            res.render("index", { Name1: req.session.userDetails, msgwr: true })
        }
    }
    else {
        res.render("index", { msglo: true })
    }
})



app.listen(port, () => {
    console.log(`The app is running on the port number ${port}`)
})