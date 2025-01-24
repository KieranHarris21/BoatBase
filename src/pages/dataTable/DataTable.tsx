import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export const DataTable: React.FC = () => {

  const { tableName, data } = {
    tableName: 'dekko', data: [
      {
        id: "000c6a6c-c34e-4160-9a1a-5b8f2b02a163",
        last_edited: 1737556687210,
        last_edited_by_user_id: "c608b92a1e0f47f7b675d6e42f60462a",
        location: '[{"latitude":24.35354,"longitude":13.23534}]',
        sync: 'true',
        synced_at: 1737556687210,
        team: "External Sales Team",
        template_id: "221a0a29-ce43-4b",
        template_name: "2025 Jan Test",
        template_version: 0,
        time_ended: 1737556687210,
        time_started: 1737556687210,
        users: '["c608b92a1e0f47f7b675d6e42f60462a"]'
      },
      {
        id: "000c6a6c-c34e-4160-9a1a-5b8f2b02a163",
        last_edited: 1737556687210,
        last_edited_by_user_id: "c608b92a1e0f47f7b675d6e42f60462a",
        location: '[{"latitude":24.35354,"longitude":13.23534}]',
        sync: 'true',
        synced_at: 1737556687210,
        team: "External Sales Team",
        template_id: "221a0a29-ce43-4b",
        template_name: "2025 Jan Test",
        template_version: 0,
        time_ended: 1737556687210,
        time_started: 1737556687210,
        users: '["c608b92a1e0f47f7b675d6e42f60462a"]'
      }
    ]
  };

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  const columns = Object.keys(data[0]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='main-title'>Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <div className="mx-auto mt-10 w-11/12 rounded-lg bg-gray-700 p-5" >
          <div className=''>
            <div className=""> {tableName} </div>
            <div>
              <div className="space-evenly mt-2 flex flex-row overflow-x-scroll">
                {columns.map((column) => (
                  <div className="just-a-border h-full flex-1 flex-grow border-y-2 border-r-2 border-gray-800 text-center first:border-l-2">
                    <div className="mb-2 px-2 pt-2 text-sm font-bold uppercase">{column}</div>
                    {data.map((row: any, rowIndex) => (
                      <div
                        key={rowIndex}
                        className="flex flex-1 flex-row border-b-2 border-b-gray-500 bg-red-700 first:bg-gray-400 last:border-0 odd:bg-slate-600 even:bg-slate-800">
                        <div
                          key={rowIndex}
                          className="overflow-hidden overflow-ellipsis whitespace-nowrap px-2 py-1"
                        >
                          {row[column]}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};