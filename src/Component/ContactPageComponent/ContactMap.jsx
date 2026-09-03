export default function ContactMap({ address = 'HireDesk Office, Lagos, Nigeria' }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
      <iframe
        title="HireDesk Office Location"
        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2243656232927!2d5.743569374354507!3d5.533701933874825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad58a7cdafbb%3A0x2c4d33790774948d!2sShell%20Cooperative%20Estate!5e0!3m2!1sen!2sng!4v1788432213135!5m2!1sen!2sng"}
        width="100%"
        height="400"
        style={{ border: 0 , margin: 0, padding: 0}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[450px] text-2xl"
      />
      {/* <iframe src= width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}
    </div>
  )
}