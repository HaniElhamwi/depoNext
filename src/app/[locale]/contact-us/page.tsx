import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getTranslations } from "next-intl/server";

const ContactUs = async () => {
  const t = await getTranslations("ACTIVITIES_SECTION");

  async function send(formData: FormData) {
    "use server";

    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Perform your server-side logic here, such as sending an email or saving to a database
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // TODO : Add email sending logic here
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6 rtl:font-changa font-montserrat">
            {t("CONTACT_US")}
          </h1>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form className="space-y-8" action={send}>
            <div>
              <Label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {t("YOUR_EMAIL")}
              </Label>
              <Input
                name="email"
                type="email"
                id="email"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder={t("YOUR_EMAIL")}
                required
              />
            </div>
            <div>
              <Label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {t("SUBJECT")}
              </Label>
              <Input
                name="subject"
                type="text"
                id="subject"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder={t("LET_US_KNOW_HOW_WE_CAN_HELP_YOU")}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <Label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                {t("YOUR_MESSAGE")}
              </Label>
              <Textarea
                name="message"
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder={t("LEAVE_COMMENT")}
                required
              />
            </div>
            <Button type="submit" className="bg-ssu-blue">
              {t("SEND")}
            </Button>
          </form>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4"></div>
      </section>
    </>
  );
};

export default ContactUs;

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
