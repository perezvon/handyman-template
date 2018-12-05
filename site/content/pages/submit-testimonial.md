+++
date = "2017-05-17T13:03:58-04:00"
title = "Submit a Testimonial"
url = "/submit"
+++
<div class='contact-container'>
## Submit a Testimonial
<hr />

If you've been pleased with our work or just want to say hi, we want to hear from you!

<form name="testimonial-form" method="POST" netlify-honeypot="bot-field" netlify>
  <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
    <input type="text" name="subject" value="New Testimonial Submitted" />
  </p>
  <input type="text" placeholder="Your Name" name="name">
  <input type="email" placeholder="Your Email" name="email">
  <textarea name="message" rows=5 placeholder="Tell us a little more about the job here."></textarea>
  <button>Submit</button>
</form>

<aside class='contact-sidebar'>
<h2>Find Us</h2>
<hr />
<div>
  <p>JJ Handyman Services <br/>
  1225 Westminster Street #28 <br/>
  St. Paul, MN 55130</p>
</div>
<div>
<p><a href='mailto:jjhandyman24@gmail.com'>jjhandyman24@gmail.com</a><br/>
651 279 7900</p>
</div>
</aside>