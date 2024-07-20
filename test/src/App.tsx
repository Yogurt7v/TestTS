import { TableHeader } from './components/tableHeader/TableHeader';
import { MainContent } from './components/mainContent/MainContent';
import './App.css';

function App() {
  return (
    <div className="AppWrapper">
      <h1 className="title">Список счётчиков</h1>
      <div className="tableWrapper">
        <div className="background">
          <TableHeader />
          <MainContent />
          <div>Пагинация в задании не упоминается</div>
        </div>
      </div>
    </div>
  );
}

export default App;
