var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");
                      
var data = [
    {
        name: "Mountain Top",
        image: "http://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "Lorem ipsum dolor sit amet, nonumy ignota vim cu. Vis et vulputate dissentias. In timeam facilisi invenire sit. Nam numquam aliquid ei, nostrud ceteros luptatum cu pri. Nam ad cibo iusto feugiat."
    },
    {
        name: "Hazy Mountain",
        image: "https://farm1.staticflickr.com/7/5954480_34a881115f.jpg",
        description: "Lorem ipsum dolor sit amet, nonumy ignota vim cu. Vis et vulputate dissentias. In timeam facilisi invenire sit. Nam numquam aliquid ei, nostrud ceteros luptatum cu pri. Nam ad cibo iusto feugiat."
    }
]

function seedDB() {
    User.remove({});
    Comment.remove({});
    // remove all campgrounds
    Campground.remove({}, function(err) {
        // if (err) {
        //     console.log(err);
        // } else {
        //     console.log("removed campgrounds");
        //     // add a few campgrounds
        //     data.forEach(function(seed) {
        //       Campground.create(seed, function(err, campground) {
        //           if (err) {
        //               console.log("error creating campgrounds");
        //               console.log(err);
        //           } else {
        //               console.log("added a campground");
        //               // create comment
        //               Comment.create({
        //                   text: "This place is greate but I wish there was internet.",
        //                   author: "Bryan"
        //               }, function(err, comment) {
        //                   if (err) {
        //                       console.log("error creating comment");
        //                       console.log(err);
        //                   } else {
        //                       campground.comments.push(comment);
        //                       campground.save();
        //                       console.log("Created a new comment");
        //                   }
        //               });
        //           }
        //       });
        //     });
        // }
    });
}

module.exports = seedDB;