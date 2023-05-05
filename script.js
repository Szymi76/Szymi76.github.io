const CHECKBOXES_LS_KEY = "checkboxes";

/**
 * Tablica egzaminów wyświtlana w tabeli
 */

const exams = [
  {
    type: "INF03",
    date: "2021-06-01",
    link: {
      sheet: "./egzaminy/INF03-2021-06-01/inf-03-2021-06-01-SG.pdf",
      zip: "./egzaminy/INF03-2021-06-01/zad1.zip",
    },
  },
  {
    type: "INF03",
    date: "2022-01-01",
    link: {
      sheet: "./egzaminy/INF03-2022-01-01/inf-03-2022-01-01-SG.pdf",
      zip: "./egzaminy/INF03-2022-01-01/zad1.zip",
    },
  },
  {
    type: "INF03",
    date: "2022-06-01",
    link: {
      sheet: "./egzaminy/INF03-2022-06-01/inf-03-2022-06-01-SG.pdf",
      zip: "./egzaminy/INF03-2022-06-01/pliki1.zip",
    },
  },
  {
    type: "INF03",
    date: "2022-06-02",
    link: {
      sheet: "./egzaminy/INF03-2022-06-02/inf-03-2022-06-02-SG.pdf",
      zip: "./egzaminy/INF03-2022-06-02/pliki2.zip",
    },
  },
  {
    type: "INF03",
    date: "2022-06-03",
    link: {
      sheet: "./egzaminy/INF03-2022-06-03/inf-03-2022-06-03-SG.pdf",
      zip: "./egzaminy/INF03-2022-06-03/pliki3.zip",
    },
  },
  {
    type: "EE09",
    date: "2019-06-01",
    link: {
      sheet: "./egzaminy/EE09-2019-06-01/EE09-2019-06-01.pdf",
      zip: "./egzaminy/EE09-2019-06-01/pliki1.zip",
    },
  },
  {
    type: "EE09",
    date: "2019-06-02",
    link: {
      sheet: "./egzaminy/EE09-2019-06-02/EE09-2019-06-02.pdf",
      zip: "./egzaminy/EE09-2019-06-02/pliki2.zip",
    },
  },
  {
    type: "EE09",
    date: "2019-06-03",
    link: {
      sheet: "./egzaminy/EE09-2019-06-03/EE09-2019-06-03.pdf",
      zip: "./egzaminy/EE09-2019-06-03/pliki3.zip",
    },
  },
  {
    type: "EE09",
    date: "2019-06-04",
    link: {
      sheet: "./egzaminy/EE09-2019-06-04/EE09-2019-06-04.pdf",
      zip: "./egzaminy/EE09-2019-06-04/pliki4.zip",
    },
  },
  {
    type: "EE09",
    date: "2019-06-05",
    link: {
      sheet: "./egzaminy/EE09-2019-06-05/EE09-2019-06-05.pdf",
      zip: "./egzaminy/EE09-2019-06-05/pliki5.zip",
    },
  },
  {
    type: "EE09",
    date: "2019-06-06",
    link: {
      sheet: "./egzaminy/EE09-2019-06-06/EE09-2019-06-06.pdf",
      zip: "./egzaminy/EE09-2019-06-06/pliki6.zip",
    },
  },
  {
    type: "EE09",
    date: "2020-01-01",
    link: {
      sheet: "./egzaminy/EE09-2020-01-01/EE09-2020-01-01-SG.pdf",
      zip: "./egzaminy/EE09-2020-01-01/pliki1.zip",
    },
  },
  {
    type: "EE09",
    date: "2020-01-02",
    link: {
      sheet: "./egzaminy/EE09-2020-01-02/EE09-2020-01-02-SG.pdf",
      zip: "./egzaminy/EE09-2020-01-02/pliki2.zip",
    },
  },
  {
    type: "EE09",
    date: "2020-01-03",
    link: {
      sheet: "./egzaminy/EE09-2020-01-03/EE09-2020-01-03-SG.pdf",
      zip: "./egzaminy/EE09-2020-01-03/pliki3.zip",
    },
  },
  {
    type: "EE09",
    date: "2020-06-01",
    link: {
      sheet: "./egzaminy/EE09-2020-06-01/EE09-2020-06-01-SG.pdf",
      zip: "./egzaminy/EE09-2020-06-01/egzamin5.zip",
    },
  },
  {
    type: "EE09",
    date: "2020-06-02",
    link: {
      sheet: "./egzaminy/EE09-2020-06-02/EE09-2020-06-02-SG.pdf",
      zip: "./egzaminy/EE09-2020-06-02/egzamin3.zip",
    },
  },
  {
    type: "EE09",
    date: "2020-06-03",
    link: {
      sheet: "./egzaminy/EE09-2020-06-03/EE09-2020-06-03-SG.pdf",
      zip: "./egzaminy/EE09-2020-06-03/egzamin5.zip",
    },
  },
  {
    type: "EE09",
    date: "2020-06-04",
    link: {
      sheet: "./egzaminy/EE09-2020-06-04/EE09-2020-06-04-SG.pdf",
      zip: "./egzaminy/EE09-2020-06-04/egzamin1.zip",
    },
  },
  {
    type: "EE09",
    date: "2020-06-05",
    link: {
      sheet: "./egzaminy/EE09-2020-06-05/EE09-2020-06-05-SG.pdf",
      zip: "./egzaminy/EE09-2020-06-05/egzamin2.zip",
    },
  },
  {
    type: "EE09",
    date: "2020-06-06",
    link: {
      sheet: "./egzaminy/EE09-2020-06-06/EE09-2020-06-06-SG.pdf",
      zip: "./egzaminy/EE09-2020-06-06/egzamin4.zip",
    },
  },
  {
    type: "EE09",
    date: "2021-01-01",
    link: {
      sheet: "./egzaminy/EE09-2021-01-01/EE-09-2021-01-01-SG.pdf",
      zip: "./egzaminy/EE09-2021-01-01/z1.zip",
    },
  },
  {
    type: "EE09",
    date: "2021-01-02",
    link: {
      sheet: "./egzaminy/EE09-2021-01-02/EE-09-2021-01-02-SG.pdf",
      zip: "./egzaminy/EE09-2021-01-02/z2.zip",
    },
  },
  {
    type: "EE09",
    date: "2021-01-03",
    link: {
      sheet: "./egzaminy/EE09-2021-01-03/EE-09-2021-01-03-SG.pdf",
      zip: "./egzaminy/EE09-2021-01-03/z3.zip",
    },
  },
  {
    type: "EE09",
    date: "2021-01-04",
    link: {
      sheet: "./egzaminy/EE09-2021-01-04/EE-09-2021-01-04-SG.pdf",
      zip: "./egzaminy/EE09-2021-01-04/z4.zip",
    },
  },
  {
    type: "EE09",
    date: "2021-01-05",
    link: {
      sheet: "./egzaminy/EE09-2021-01-05/EE-09-2021-01-05-SG.pdf",
      zip: "./egzaminy/EE09-2021-01-05/z5.zip",
    },
  },
  {
    type: "EE09",
    date: "2021-01-06",
    link: {
      sheet: "./egzaminy/EE09-2021-01-06/EE-09-2021-01-06-SG.pdf",
      zip: "./egzaminy/EE09-2021-01-06/z6.zip",
    },
  },
  {
    type: "EE09",
    date: "2021-06-01",
    link: {
      sheet: "./egzaminy/EE09-2021-06-01/EE-09-2021-06-01-SG.pdf",
      zip: "./egzaminy/EE09-2021-06-01/zad1.zip",
    },
  },
  {
    type: "EE09",
    date: "2021-06-02",
    link: {
      sheet: "./egzaminy/EE09-2021-06-02/EE-09-2021-06-02-SG.pdf",
      zip: "./egzaminy/EE09-2021-06-02/zad2.zip",
    },
  },
  {
    type: "EE09",
    date: "2021-06-03",
    link: {
      sheet: "./egzaminy/EE09-2021-06-03/EE-09-2021-06-03-SG.pdf",
      zip: "./egzaminy/EE09-2021-06-03/zad3.zip",
    },
  },
  {
    type: "EE09",
    date: "2021-06-04",
    link: {
      sheet: "./egzaminy/EE09-2021-06-04/EE-09-2021-06-04-SG.pdf",
      zip: "./egzaminy/EE09-2021-06-04/zad4.zip",
    },
  },
  {
    type: "EE09",
    date: "2022-01-01",
    link: {
      sheet: "./egzaminy/EE09-2022-01-01/EE-09-2022-01-01-SG.pdf",
      zip: "./egzaminy/EE09-2022-01-01/pliki1.zip",
    },
  },
  {
    type: "EE09",
    date: "2022-01-02",
    link: {
      sheet: "./egzaminy/EE09-2022-01-02/EE-09-2022-01-02-SG.pdf",
      zip: "./egzaminy/EE09-2022-01-02/pliki2.zip",
    },
  },
  {
    type: "EE09",
    date: "2022-01-03",
    link: {
      sheet: "./egzaminy/EE09-2022-01-03/EE-09-2022-01-03-SG.pdf",
      zip: "./egzaminy/EE09-2022-01-03/pliki3.zip",
    },
  },
  {
    type: "EE09",
    date: "2022-01-04",
    link: {
      sheet: "./egzaminy/EE09-2022-01-04/EE-09-2022-01-04-SG.pdf",
      zip: "./egzaminy/EE09-2022-01-04/pliki4.zip",
    },
  },
  {
    type: "EE09",
    date: "2022-01-05",
    link: {
      sheet: "./egzaminy/EE09-2022-01-05/EE-09-2022-01-05-SG.pdf",
      zip: "./egzaminy/EE09-2022-01-05/pliki5.zip",
    },
  },
  {
    type: "EE09",
    date: "2022-01-06",
    link: {
      sheet: "./egzaminy/EE09-2022-01-06/EE-09-2022-01-06-SG.pdf",
      zip: "./egzaminy/EE09-2022-01-06/pliki6.zip",
    },
  },
  {
    type: "EE09",
    date: "2022-01-07",
    link: {
      sheet: "./egzaminy/EE09-2022-01-07/EE-09-2022-01-07-SG.pdf",
      zip: "./egzaminy/EE09-2022-01-07/pliki7.zip",
    },
  },
  {
    type: "EE09",
    date: "2022-06-01",
    link: {
      sheet: "./egzaminy/EE09-2022-06-01/EE-09-2022-06-01-SG.pdf",
      zip: "./egzaminy/EE09-2022-06-01/zad1.zip",
    },
  },
  {
    type: "EE09",
    date: "2022-06-02",
    link: {
      sheet: "./egzaminy/EE09-2022-06-02/EE-09-2022-06-02-SG.pdf",
      zip: "./egzaminy/EE09-2022-06-02/zad2.zip",
    },
  },
  {
    type: "EE09",
    date: "2022-06-03",
    link: {
      sheet: "./egzaminy/EE09-2022-06-03/EE-09-2022-06-03-SG.pdf",
      zip: "./egzaminy/EE09-2022-06-03/zad3.zip",
    },
  },
  {
    type: "EE09",
    date: "2022-06-04",
    link: {
      sheet: "./egzaminy/EE09-2022-06-04/EE-09-2022-06-04-SG.pdf",
      zip: "./egzaminy/EE09-2022-06-04/zad4.zip",
    },
  },
  {
    type: "E14",
    date: "2019-01-01",
    link: {
      sheet: "./egzaminy/E14-2019-01-01/E14-2019-01-01.pdf",
      zip: "./egzaminy/E14-2019-01-01/pliki1.zip",
    },
  },
  {
    type: "E14",
    date: "2019-01-02",
    link: {
      sheet: "./egzaminy/E14-2019-01-02/E14-2019-01-02.pdf",
      zip: "./egzaminy/E14-2019-01-02/pliki2.zip",
    },
  },
  {
    type: "E14",
    date: "2019-01-03",
    link: {
      sheet: "./egzaminy/E14-2019-01-03/E14-2019-01-03.pdf",
      zip: "./egzaminy/E14-2019-01-03/pliki3.zip",
    },
  },
  {
    type: "E14",
    date: "2019-01-04",
    link: {
      sheet: "./egzaminy/E14-2019-01-04/E14-2019-01-04.pdf",
      zip: "./egzaminy/E14-2019-01-04/pliki4.zip",
    },
  },
  {
    type: "E14",
    date: "2019-01-05",
    link: {
      sheet: "./egzaminy/E14-2019-01-05/E14-2019-01-05.pdf",
      zip: "./egzaminy/E14-2019-01-05/pliki5.zip",
    },
  },
  {
    type: "E14",
    date: "2019-01-06",
    link: {
      sheet: "./egzaminy/E14-2019-01-06/E14-2019-01-06.pdf",
      zip: "./egzaminy/E14-2019-01-06/pliki6.zip",
    },
  },
  {
    type: "E14",
    date: "2019-01-07",
    link: {
      sheet: "./egzaminy/E14-2019-01-07/E14-2019-01-07.pdf",
      zip: "./egzaminy/E14-2019-01-07/materialy1.zip",
    },
  },
  {
    type: "E14",
    date: "2019-01-08",
    link: {
      sheet: "./egzaminy/E14-2019-01-08/E14-2019-01-08.pdf",
      zip: "./egzaminy/E14-2019-01-08/materialy2.zip",
    },
  },
  {
    type: "E14",
    date: "2019-01-09",
    link: {
      sheet: "./egzaminy/E14-2019-01-09/EE-09-2022-06-04-SG.pdf",
      zip: "./egzaminy/E14-2019-01-09/materialy3.zip",
    },
  },
  {
    type: "E14",
    date: "2019-01-10",
    link: {
      sheet: "./egzaminy/E14-2019-01-10/E14-2019-01-10.pdf",
      zip: "./egzaminy/E14-2019-01-10/materialy4.zip",
    },
  },
  {
    type: "E14",
    date: "2019-01-11",
    link: {
      sheet: "./egzaminy/E14-2019-01-11/E14-2019-01-11.pdf",
      zip: "./egzaminy/E14-2019-01-11/materialy5-6.zip",
    },
  },
  {
    type: "E14",
    date: "2019-01-12",
    link: {
      sheet: "./egzaminy/E14-2019-01-12/E14-2019-01-12.pdf",
      zip: "./egzaminy/E14-2019-01-12/materialy5-6.zip",
    },
  },
  {
    type: "E14",
    date: "2019-06-01",
    link: {
      sheet: "./egzaminy/E14-2019-06-01/E14-2019-06-01.pdf",
      zip: "./egzaminy/E14-2019-06-01/materialy1.zip",
    },
  },
  {
    type: "E14",
    date: "2019-06-02",
    link: {
      sheet: "./egzaminy/E14-2019-06-02/E14-2019-06-02.pdf",
      zip: "./egzaminy/E14-2019-06-02/materialy2.zip",
    },
  },
  {
    type: "E14",
    date: "2019-06-03",
    link: {
      sheet: "./egzaminy/E14-2019-06-03/E14-2019-06-03.pdf",
      zip: "./egzaminy/E14-2019-06-03/materialy3.zip",
    },
  },
  {
    type: "E14",
    date: "2019-06-04",
    link: {
      sheet: "./egzaminy/E14-2019-06-04/E14-2019-06-04.pdf",
      zip: "./egzaminy/E14-2019-06-04/materialy4.zip",
    },
  },
  {
    type: "E14",
    date: "2019-06-05",
    link: {
      sheet: "./egzaminy/E14-2019-06-05/E14-2019-06-05.pdf",
      zip: "./egzaminy/E14-2019-06-05/materialy5.zip",
    },
  },
  {
    type: "E14",
    date: "2019-06-06",
    link: {
      sheet: "./egzaminy/E14-2019-06-06/E14-2019-06-06.pdf",
      zip: "./egzaminy/E14-2019-06-06/materialy6.zip",
    },
  },
  {
    type: "E14",
    date: "2020-01-01",
    link: {
      sheet: "./egzaminy/E14-2020-01-01/E14-2020-01-01.pdf",
      zip: "./egzaminy/E14-2020-01-01/materialy1.zip",
    },
  },
  {
    type: "E14",
    date: "2020-01-02",
    link: {
      sheet: "./egzaminy/E14-2020-01-02/E14-2020-01-02.pdf",
      zip: "./egzaminy/E14-2020-01-02/materialy2.zip",
    },
  },
  {
    type: "E14",
    date: "2020-01-03",
    link: {
      sheet: "./egzaminy/E14-2020-01-03/E14-2020-01-03.pdf",
      zip: "./egzaminy/E14-2020-01-03/materialy3.zip",
    },
  },
  {
    type: "E14",
    date: "2020-01-04",
    link: {
      sheet: "./egzaminy/E14-2020-01-04/E14-2020-01-04.pdf",
      zip: "./egzaminy/E14-2020-01-04/materialy4.zip",
    },
  },
  {
    type: "E14",
    date: "2020-06-01",
    link: {
      sheet: "./egzaminy/E14-2020-06-01/E14-2020-06-01.pdf",
      zip: "./egzaminy/E14-2020-06-01/egzamin1.zip",
    },
  },
  {
    type: "E14",
    date: "2020-06-02",
    link: {
      sheet: "./egzaminy/E14-2020-06-02/E14-2020-06-02.pdf",
      zip: "./egzaminy/E14-2020-06-02/egzamin2.zip",
    },
  },
  {
    type: "E14",
    date: "2020-06-03",
    link: {
      sheet: "./egzaminy/E14-2020-06-03/E14-2020-06-03.pdf",
      zip: "./egzaminy/E14-2020-06-03/egzamin3.zip",
    },
  },
  {
    type: "E14",
    date: "2020-06-04",
    link: {
      sheet: "./egzaminy/E14-2020-06-04/E14-2020-06-04.pdf",
      zip: "./egzaminy/E14-2020-06-04/egzamin4.zip",
    },
  },
];

const table = document.getElementsByTagName("tbody")[0];

renderEgzamsToTable();

const checkboxes = document.querySelectorAll("input[type='checkbox']");
let localStorageCheckboxes = getValueFromLocalStorage(
  CHECKBOXES_LS_KEY,
  exams.map(() => false)
);

const iframe = document.getElementsByTagName("iframe")[0];
const buttons = document.querySelectorAll("button[data-type='preview']");

checkInitialCheckboxes();
trackClickedCheckboxes();
trackClickedPreviewButtons();

/**
 * Wybiera wartość z local stroage na podstawie klucza, w przypadku gdy
 * nie istnieje to zwraca initialValue.
 */

function getValueFromLocalStorage(key, initialValue) {
  try {
    const value = localStorage.getItem(key);
    if (value === null) localStorage.setItem(key, JSON.stringify(initialValue));

    return value ? JSON.parse(value) : initialValue;
  } catch (err) {
    console.warn("Nie udało się załadować wartości z local storage.");
  }
}

/**
 * Zamienia tablice rgzaminów na elementy html i umieszacza je w tabeli.
 */

function renderEgzamsToTable() {
  const html = exams.map((egzam, index) => {
    return `
            <tr ${index == 0 ? "class='active-row'" : ""}>
              <td>
                <p>${index + 1}</p>
              </td>
              <td>
                  <input type="checkbox" data-index=${index} />
              </td>
              <td>
                  <p>${egzam.type}</p>
              </td>
              <td>
                  <p>${egzam.date}</p>
              </td>
              <td>
                  <a href='${egzam.link.sheet}' download>Pobierz</a>
              </td>
              <td>
                  <a href='${egzam.link.zip}' download>Pobierz</a>
              </td>
              <td>
                  <button data-type="preview">Otwórz</button>
              </td>
            </tr>
          `;
  });

  table.innerHTML += html.join("");
}

/**
 * Na podstawie wcześniej wyjętycz checkboxów z local storage nadej odpowiedni atrybut
 * check dla każdego checkboxa.
 */

function checkInitialCheckboxes() {
  checkboxes.forEach((checkbox) => {
    const checked = localStorageCheckboxes[checkbox.dataset.index];
    checkbox.checked = checked;
  });
}

/**
 * Podpina do każdego checkboxa event listener, który sprawdza czy checkbox
 * jest lub nie jest zaznaczony i aktualizuje local storage.
 */

function trackClickedCheckboxes() {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      const updatedLocalStorageCheckboxes = localStorageCheckboxes.map((checked, index) =>
        index == e.currentTarget.dataset.index ? e.currentTarget.checked : checked
      );
      localStorageCheckboxes = updatedLocalStorageCheckboxes;
      localStorage.setItem(CHECKBOXES_LS_KEY, JSON.stringify(updatedLocalStorageCheckboxes));
    });
  });
}

/**
 * Nasłuchuje na kliknięcia przycisków do podglądu
 */

function trackClickedPreviewButtons() {
  buttons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      iframe.src = exams[index].link.sheet;
      Array.from(document.getElementsByTagName("tr")).forEach((tr, i) => {
        i == index + 1 ? (tr.className = "active-row") : (tr.className = "");
      });
    });
  });
}
