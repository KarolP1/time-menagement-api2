const sendRegisterEmail = async (transporter, title, email, description) => {
  let infoRegister = await transporter.sendMail({
    from: `"Fred Foo 👻" <karolcod@karolcodetest.networkmanager.pl>`, // sender address
    to: `${email}`, // list of receivers
    subject: `${title} ✔`, // Subject line
    text: `${description} /n `, // plain text body
    html: `<table style="background:#2f5581;font-family:Helvetica Neue,Helvetica,Arial,sans-serif" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#2f5581">
    <tbody>
        <tr>
            <td align="center">
            <table width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody>
                    <tr>
                        <td align="center">
                        <table width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                            <tbody>
                                <tr>
                                    <td height="30">&nbsp;</td>
                                </tr>
                                
                                <tr>
                                    <td height="50">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td align="left">
                                    <p style="color:#ffffff;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:bold;font-size:36px;line-height:42px;margin:0;padding:0">Hi ${email},</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="25">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td align="left">
                                    <p style="color:#b5becc;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:normal;font-size:18px;line-height:26px;margin:0;padding:0">Thank you for joining the Benchmark team!</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="45">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td>
            <table style="background:#ffffff;border-top:1px solid #ccc;border-bottom:1px solid #ccc" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff">
                <tbody>
                    <tr>
                        <td align="center">
                        <table width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                            <tbody>
                                <tr>
                                    <td colspan="2" width="20">&nbsp;
                                    <h2><strong>&nbsp;&nbsp; Account Information</strong></h2>
                                    <p>&nbsp;</p>
                                    </td>
                                    <td height="40">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td width="20">&nbsp;</td>
                                    <td align="left">
                                    <h3 style="color:#3c464d;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:bold;font-size:21px;line-height:20px;margin:0;padding:0">Here's your login info so you can get started:</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" width="20">&nbsp;</td>
                                    <td height="20">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td width="20">&nbsp;</td>
                                    <td align="left">
                                    <p style="color:#3c464d;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:26px;margin:0;padding:0"><strong>Username:</strong>&nbsp;<span><a href="mailto:platek549@gmail.com" target="_blank">${email}</a></span></p>
                                    <p style="color:#3c464d;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:26px;margin:0;padding:0"><strong>Password:</strong>&nbsp;<span>********</span></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" width="20">&nbsp;</td>
                                    <td height="20">&nbsp;</td>
                                </tr>
                                
                                <tr>
                                    <td colspan="2" width="20">&nbsp;</td>
                                    <td height="40">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td>
            <table style="background:#ece6de" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ece6de">
                <tbody>
                    <tr>
                        <td align="center">
                        <table width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                            <tbody>
                                <tr>
                                    <td height="35">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>
                                    <table style="margin:0 auto" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td width="20">&nbsp;</td>
                                                <td align="center">
                                                <p style="color:#3c464d;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:normal;text-align:left;margin:0;padding:0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit amet ducimus repellat error et dolores porro exercitationem quam, ratione soluta consequatur ad eligendi explicabo minus deleniti odit doloremque eveniet nihil quaerat placeat in a fugit pariatur sint. Quos maxime ducimus corporis repellat dolor nesciunt, tempora autem alias excepturi cum corrupti beatae, ad modi. Accusantium quam dicta sit consectetur commodi in tempore, repellendus hic doloremque, pariatur quidem voluptate dolores? Quis vel molestiae labore quo placeat asperiores facere explicabo exercitationem, quasi quaerat nemo in doloremque reprehenderit sed quam sint, quibusdam earum porro nulla architecto sit ad quas maxime officia! Dolores voluptas saepe eius, et veritatis quia eligendi, non quae reprehenderit qui fuga porro sequi quo! Alias, dolorem praesentium. Facilis officiis, hic similique rem repellat vitae est amet minus nesciunt saepe impedit </p>
                                                </td>
                                                <td width="20">&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="40">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td width="20" valign="top">&nbsp;</td>
                                                            <td width="600" valign="top" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="left">
                                                                        <p style="color:#3c464d;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;margin:0;padding:0;text-align:left"><strong><span>Creating a contact list</span></strong></p>
                                                                        <p style="color:#3c464d;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;margin:0;padding:0;text-align:left"><span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="25">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="padding:0 20px" align="center">
                                                <div style="border-bottom:1px solid #ffffff">&nbsp;</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="25">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td width="20" valign="top">&nbsp;</td>
                                                            <td width="600" valign="top" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="left">
                                                                        <p style="color:#3c464d;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;margin:0;padding:0;text-align:left">&nbsp;<span>All the best,<br>
                                                                        </span></p>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="40">&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <table style="background:#3d90b4" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                                <tr>
                                    <td align="center">
                                    <table width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td align="center">
                                                <table width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td colspan="5" height="20">&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="5" height="20">&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td>
            <table style="background:#ffffff" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff">
                <tbody>
                    <tr>
                        <td align="center">
                        <table width="600" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                                <tr>
                                    <td>
                                    <table width="470" cellspacing="0" cellpadding="0" border="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td colspan="11" height="35">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td width="46" valign="top"><a href="https://twitter.com/benchmarkemail" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://twitter.com/benchmarkemail&amp;source=gmail&amp;ust=1656008396241000&amp;usg=AOvVaw1e9kdeYscU7Vvam6xqGuaJ"><img style="display:block" alt="Twitter" src="https://ci3.googleusercontent.com/proxy/Qwl1YSmmXzYT1fhluj84EJzut38w4Gb57reBW2X1UHy_gpbKEn2S39zhPBSaJvCxLNRYLFxVkabWv2WYP_eQohbOOcQ1BmJZGdXFd95r=s0-d-e1-ft#http://benchmarkemail.com/images/event/emails/footer-tw.png" class="CToWUd" border="0"></a></td>
                                                <td width="54">&nbsp;</td>
                                                <td width="18" valign="top"><a href="https://www.facebook.com/BenchmarkEmail" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/BenchmarkEmail&amp;source=gmail&amp;ust=1656008396241000&amp;usg=AOvVaw0juG3FdxJOLk7HccK4TbwA"><img style="display:block" alt="Facebook" src="https://ci6.googleusercontent.com/proxy/HGVqbCYFeozbcfvJJsVqDOsTQaDXwPZT21OuO5cT3Opn9dhcS9Is3hIZuczUI1EcuZpPbVkK2LUxB3EIMoIEl4wre4u_geO2zdqp9dSd=s0-d-e1-ft#http://benchmarkemail.com/images/event/emails/footer-fb.png" class="CToWUd" border="0"></a></td>
                                                <td width="54">&nbsp;</td>
                                                <td width="27" valign="top"><a href="http://pinterest.com/benchmarkemail/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://pinterest.com/benchmarkemail/&amp;source=gmail&amp;ust=1656008396241000&amp;usg=AOvVaw3LLbsqjWFGzsMzAFp5inrQ"><img style="display:block" alt="Pinterest" src="https://ci4.googleusercontent.com/proxy/TrSIlMJ7zSILQshSqLqVq4nWjtyjCPZUtsnNi6KTpfvFKxfOBwprC9WUDXaDkrVSlEkgqzcK6Pq2-qoO3M9fhZfHbJK6KJw1jav5vNP5FrTdWUY-0g=s0-d-e1-ft#http://benchmarkemail.com/images/event/emails/footer-pinterest.png" class="CToWUd" border="0"></a></td>
                                                <td width="53">&nbsp;</td>
                                                <td width="35" valign="top"><a href="http://instagram.com/benchmarkemail" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://instagram.com/benchmarkemail&amp;source=gmail&amp;ust=1656008396241000&amp;usg=AOvVaw17rpTCUOxD1AAUjYSF6mqc"><img style="display:block" alt="Instagram" src="https://ci3.googleusercontent.com/proxy/FovqIVzAZosREU7vAMNghC9D1IDp1eNmQZU1t1rwF3YvucbIvyYCdKvn8ojoFUmgYg10qDteAs68pMzwH0VAct8xgF3Y7tBEyPrUn6Oh=s0-d-e1-ft#http://benchmarkemail.com/images/event/emails/footer-ig.png" class="CToWUd" border="0"></a></td>
                                                <td width="53">&nbsp;</td>
                                                <td width="40" valign="top"><a href="mailto:support@benchmarkemail.com" target="_blank"><img style="display:block" alt="Email" src="https://ci3.googleusercontent.com/proxy/MObLTbo1pqEqgo7HGu3UcnvRqRkjLE6Re0LesR0pGx5sgRHZPZkPg97r1Zz2OGm-pOC70N0g_ZHRT-w-LVH7HkiZ0ZccWXy0ZlHNdtgWMBYM=s0-d-e1-ft#http://benchmarkemail.com/images/event/emails/footer-email.png" class="CToWUd" border="0"></a></td>
                                            </tr>
                                            <tr>
                                                <td colspan="11" height="35" align="center"><span style="display:block;font-size:10px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:cfcfcf">&nbsp;<br>
                                                Corporate Headquarters <br>
                                                3636 S. Geyer Road, Suite 100<br>
St Louis, MO 63127, USA<br>
                                                </span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
    </tbody>
</table>`, // html body
  });

  return infoRegister;
};

const sendResetEmail = async (
  transporter,
  title,
  email,
  description,
  verifyLink
) => {
  await transporter.sendMail({
    from: `"Fred Foo 👻" <karolcod@karolcodetest.networkmanager.pl>`, // sender address
    to: `${email}`, // list of receivers
    subject: `${title} ✔`, // Subject line
    text: `${description}`, // plain text body
    html: `<div>
    <b>Hello world? is that you? </b>,
    <a href="http://${verifyLink}">click here to reset password</a>
    <a href="http://${verifyLink}">${verifyLink}</a>
    </div>`, // html body
  });
};
module.exports = {
  sendRegisterEmail,
  sendResetEmail,
};
