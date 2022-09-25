const { MessageEmbed } = require('discord.js')
const axios = require('axios');
var wmi = require('node-wmi');

//======================

var information = 'Auth_Key_Cracked'
        //================================================

        function dateFormat (date, fstr, utc)
        {
            utc = utc ? 'getUTC' : 'get';
            return fstr.replace (/%[YmdHMS]/g, function (m) {
              switch (m) {
              case '%Y': return date[utc + 'FullYear'] ();
              case '%m': m = 1 + date[utc + 'Month'] (); break;
              case '%d': m = date[utc + 'Date'] (); break;
              case '%H': m = date[utc + 'Hours'] (); break;
              case '%M': m = date[utc + 'Minutes'] (); break;
              case '%S': m = date[utc + 'Seconds'] (); break;
              default: return m.slice (1);
              }
              return ('0' + m).slice (-2);
            });
          }
          
          function apiFunctionWrapper()
          {
            return new Promise((resolve) => {       
                wmi.Query().class('Win32_LogicalDisk', function(err, disks) {
                    resolve(disks[0].VolumeSerialNumber);
                });           
            });
          }
          
          //supreme+
          var groups = ['12', '96', '97', '99', '100', '101', '4', '3', '6', '94', '92'];

          var result = {
            status : false,
            username: undefined,
            group: undefined,
            message: undefined
          }
      
          var hwid = await apiFunctionWrapper();
      
          hwid = require('crypto').createHash('sha256').update(hwid).digest("hex")
          
          const params = new URLSearchParams();
          params.append('a', 'auth');
          params.append('k', information);
          params.append('hwid', hwid);
          
          axios.post('https://cracked.io/auth.php', params).then(res => {
            var groupes = result.group;
            var rsp = res.data;
      
            if (rsp.error)
            {
              return interaction.reply('Erreur, merci de vérifier vos informations.');
            }
            else
            {
              if (groups.includes(groupes))
              {
                var namegroupe = "Non Supreme+"
              }
              else 
              {
                var namegroupe = "Supreme+"
              } 
                let embed_help = new MessageEmbed()
                  .setColor('#00FF00')
                  .setTitle(`Auth Cracked.to`)
                  .setDescription(`▸__**INFORMATION**__
                  🕵️ \`-|\` **Utilisateur:** \`${rsp.username}\`
                  ✨ \`-|\` **Groupe:** \`${namegroupe}\` | \`${rsp.group}\`
                  📂 \`-|\` **Poste:** \`${rsp.posts}\`
                  👍 \`-|\` **Like:** \`${rsp.likes}\`
                  `)
                  .setTimestamp()
                  .setFooter({text: `🖥️ Developped By OldModz95 🖥️`})

                  return interaction.reply({
                      embeds: [embed_help],
                      ephemeral: true,
                  });
            }
            
          }).catch(error => {
            return interaction.reply('Erreur lors de la demande.');
          });