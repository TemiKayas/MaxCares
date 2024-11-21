// create a new file called About.tsx in the Components folder.


import {Typography} from "@mui/material";

export default function About() {
    return (
        <div>
            <img src="/src/assets/maxwithdog.png" alt="Max with a dog" style={{ height: '100px', marginRight: '20px' }} />
            <Typography variant="body1" component="p">
                Welcome to Max Cares Pet Care, your trusted dog walking and pet care service near Framingham, Ashland, and Sudbury, Massachusetts.
                Run by Max Davidson, a dedicated dog walker with decades of experience in pet care and veterinary assistance, we provide
                reliable and compassionate care for your furry friends. Whether you’re looking for “dog walking near me” or need
                a responsible and experienced pet sitter, Max Cares Pet Care is here to meet all your dog walking and house sitting needs
                in Framingham, Ashland, Sudbury, and surrounding areas.
                <br /><br />
                If you're in Massachusetts and searching for “dog walking in Framingham” or “house sitting near me,” look no further than Max Cares Pet Care.
                Contact us today to schedule a meet-and-greet or learn more about how we can keep your pets happy, safe, and well-cared for.
            </Typography>
        </div>
    )
}