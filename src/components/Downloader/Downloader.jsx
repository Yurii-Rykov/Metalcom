import { Button } from 'components';

const Downloader = () => {
    const onClick = async () => {
        const response = await fetch(`http://localhost:4000/api/downloads/METALKOM_catalog.pdf`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'METALCOM.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    return (
        <div>
            <Button text="скачати каталог" onClick={onClick} />
        </div>
    );
};

export default Downloader;
